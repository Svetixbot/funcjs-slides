const equipmentOfferings = require('./equipmentOfferings');

describe('equipmentOfferings', () => {
  it('should mark offerings as preffered', () => {
    const offerings = [
      {
        region: 'boston', supported: 'snow-blower', supplied: 'snow-blower', isMatch: true,
      },
      {
        region: 'boston', supported: 'snow-blower', supplied: 'snow-shovel', isMatch: false,
      },
      {
        region: 'miami', supported: 'snow-blower', supplied: 'snow-shovel', isMatch: false,
      },
    ];

    expect(equipmentOfferings(offerings)).toEqual([
      {
        region: 'boston', supported: 'snow-blower', supplied: 'snow-blower', isMatch: true, isPreferred: true,
      },
      {
        region: 'boston', supported: 'snow-blower', supplied: 'snow-shovel', isMatch: false,
      },
      {
        region: 'miami', supported: 'snow-blower', supplied: 'snow-shovel', isMatch: false, isPreferred: true,
      },
    ]);
  });
});

