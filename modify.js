const config = require('config')
const throughKeys = config.get('throughKeys')
const downcaseKeys = config.get('downcaseKeys')

module.exports = (f) => {
  let properties = {}
  for (let key of Object.keys(f.properties)) {
    const k = key.toLowerCase()
    if (throughKeys.includes(k)) {
      if (!['N_A', 'UNK', 'N_P'].includes(f.properties[key])) {
        properties[k] = f.properties[key]
      }
    } else if (downcaseKeys.includes(k)) {
      if (!['N_A'].includes(f.properties[key])) {
        properties[k] = f.properties[key].toLowerCase()
      }
    }
  }
  f.properties = properties
  return f
}

