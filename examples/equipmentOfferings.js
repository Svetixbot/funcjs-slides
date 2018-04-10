const getOfferingByRegion = (offerings, reg) => offerings.filter(({ region }) => region === reg);

const equipmentOffering = (offerings) => {
  const checkedRegions = [];
  for (let i = 0; i < offerings.length; i += 1) {
    const o1 = offerings[i];
    const r = o1.region;
    if (checkedRegions.includes(r)) {
      // eslint-disable-next-line no-continue
      continue;
    }

    let possPref = null;

    const offeringsByRegion = getOfferingByRegion(offerings, r);
    for (let j = 0; j < offeringsByRegion.length; j += 1) {
      const o2 = offeringsByRegion[j];
      if (o2.isPreferred) {
        possPref = o2;
        break;
      } else if (o2.isMatch || possPref === null) {
        possPref = o2;
      }
    }

    possPref.isPreferred = true;
    checkedRegions.push(r);
  }
  return offerings;
};

module.exports = equipmentOffering;
