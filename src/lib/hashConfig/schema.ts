import { getRleCodec, getBinaryCodec } from '@abcnews/hash-codec';
import layouts from '../../../data/appdata-layouts.json';
import data from '../../../data/appdata-built.json';
import mapConfig from '../../../data/appdata-mapconfig.json';
import parties from '../../../data/parties.json';
import * as base36Codec from '@abcnews/base-36-text';

import { invertMap } from '../../lib/utils';

/** Array containing all the individual electorate hexes */
export const electorates = data.groups
  .flatMap(group => group.hexes.map(hex => ({ ...hex, group: group.name })))
  .sort((a, b) => a.index - b.index);

export const electoratesByCode = Object.values(electorates).reduce((obj, electorate) => {
  obj[electorate.id] = electorate;
  return obj;
}, {});

const groups = data.groups;
export { groups, mapConfig, parties };

const rleDelineator = 'q';
const nullAllocationDelineator = 'x';
const rleCodec = getRleCodec({ delineator: rleDelineator });
export const allocationMap = invertMap(parties.hashCodes);
// @ts-ignore
if (allocationMap[rleDelineator] || nullAllocationDelineator === rleDelineator) {
  throw new Error('Can not use delineator in allocation map');
}

/** get electorate values in a stable order as an array */
function getSortedValues(obj) {
  return electorates.map(({ id }) => obj[id]);
}

/**
 * Put an array of values back into a `{[electorate]: value}` object.
 */
function putValues(arr) {
  return electorates.reduce((obj, { id }, i) => {
    obj[id] = arr[i] ?? null;
    return obj;
  }, {});
}

const binaryCodecRle = getBinaryCodec({ maxBits: 4 });

const binaryElectorateCodec = {
  encode: async function (electorates) {
    const values = getSortedValues(electorates);
    const bin = binaryCodecRle.encode(values);
    return bin;
  },
  decode: async function (encodedString) {
    const values = await binaryCodecRle.decode(encodedString);
    return putValues(values);
  }
};
import Geohash from 'latlon-geohash';

const geohashCodec = {
  encode: coord => (coord ? Geohash.encode(...coord.toReversed(), 6) : ''),
  decode: hash => {
    const { lat, lon } = hash ? Geohash.decode(hash) : {};
    return [lon || 0, lat || 0].filter(Boolean);
  }
};

export const defaultNullElectorates = Object.freeze(
  electorates.reduce((obj, current) => {
    obj[current.id] = null;
    return obj;
  }, {})
);

export const schema = {
  version: {
    type: 'number',
    key: 'ver'
  },
  vizType: {
    type: 'enum',
    key: 'v',
    defaultValue: 'hex',
    values: ['hex', 'geo', 'result']
  },
  layout: {
    type: 'enum',
    key: 'l',
    defaultValue: 'EXPLODED',
    values: Object.keys(layouts)
  },
  geoArea: {
    type: 'enum',
    key: 'g',
    defaultValue: 'Australia',
    values: Object.keys(mapConfig.areas)
  },
  allocations: {
    type: 'custom',
    codec: {
      encode: async (electorateMap: { [key: string]: string }) => {
        const replacedElectorates = Object.entries(electorateMap).reduce((obj, [electorateCode, allocation]) => {
          obj[electorateCode] = parties.hashCodes[allocation] || 'x';
          return obj;
        }, {});
        const string = getSortedValues(replacedElectorates)
          .map(val => val ?? 'x')
          .join('');
        const encodedString = await rleCodec.encode(string);
        return encodedString;
      },
      decode: async (electorateString: string) => {
        const str = await rleCodec.decode(electorateString).catch(e => {
          console.error('decoding string failed', electorateString, e);
          return '';
        });
        const electorateMap = str.split('').reduce((obj, val, index) => {
          const key = electorates[index]?.id;
          if (!key) return;
          obj[key] = allocationMap[String(val)] || null;
          return obj;
        }, {});
        return electorateMap;
      }
    },
    key: 'a',
    defaultValue: defaultNullElectorates
  },
  focuses: {
    type: 'custom',
    codec: binaryElectorateCodec,
    key: 'f',
    defaultValue: defaultNullElectorates
  },
  certainties: {
    type: 'custom',
    codec: binaryElectorateCodec,
    key: 'c',
    defaultValue: Object.freeze(
      electorates.reduce((obj, current) => {
        obj[current.id] = true;
        return obj;
      }, {})
    )
  },
  labelsToShow: {
    type: 'custom',
    codec: binaryElectorateCodec,
    key: 'li',
    defaultValue: defaultNullElectorates
  },
  showLabelsWhen: {
    type: 'enum',
    key: 'lb',
    defaultValue: 'none',
    values: ['none', 'states', 'electorates']
  },
  showStateLabels: {
    type: 'boolean',
    key: 'ls',
    defaultValue: false
  },
  showElectorateLabels: {
    type: 'boolean',
    key: 'le',
    defaultValue: false
  },
  showFocusedElectorateLabels: {
    type: 'boolean',
    key: 'lf',
    defaultValue: false
  },
  showTotals: {
    type: 'boolean',
    key: 't',
    defaultValue: false
  },
  arrowChart: {
    type: 'enum',
    key: 'fpa',
    defaultValue: 'None',
    values: [
      'None',
      'ALP first preference',
      'LNP first preference',
      'GRN first preference',
      'IND first preference',
      'ONP first preference',
      'TOP first preference',
      'Labor/Coalition 2CP Swing'
    ]
  },
  arrowChartPercentCounted: {
    type: 'boolean',
    key: 'fpac',
    defaultValue: true
  },
  arrowChartCaption: {
    type: 'boolean',
    key: 'arrowcaption',
    defaultValue: true
  },
  combineCoalition: {
    type: 'boolean',
    key: 'cc',
    defaultValue: false
  },
  electorateId: {
    type: 'string',
    key: 'electorate'
  },
  hexFlip: {
    type: 'enum',
    key: 'flip',
    defaultValue: 'Fade',
    values: ['Fade', 'Flip']
  },
  altText: {
    type: 'custom',
    key: 'alt',
    defaultValue: '',
    codec: base36Codec
  },
  caption: {
    type: 'custom',
    key: 'cap',
    defaultValue: '',
    codec: base36Codec
  },
  geoBoundsTopRight: {
    type: 'custom',
    key: 'geot',
    defaultValue: '',
    codec: geohashCodec
  },
  geoBoundsBottomLeft: {
    type: 'custom',
    key: 'geob',
    defaultValue: '',
    codec: geohashCodec
  }
};

export type HashConfig = {
  version: number;
  vizType: string;
  layout: string;
  geoArea: string;
  allocations: Object;
  focuses: Object;
  certainties: Object;
  labelsToShow: Object;
  showStateLabels: boolean;
  showElectorateLabels: boolean;
  showFocusedElectorateLabels: boolean;
  showTotals: boolean;
  arrowChart: string;
  combineCoalition: boolean;
  hexFlip: string;
  altText: string;
  caption: string;
  arrowChartCaption: boolean;
  geoBoundsTopRight: number[];
  geoBoundsBottomLeft: number[];
};
