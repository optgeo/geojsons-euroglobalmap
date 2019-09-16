// GeoJSONS to GeoJSONS
const Parser = require('json-text-sequence').parser
const Generator = require('json-text-sequence').generator
const modify = require('./modify.js')

const generator = new Generator()
generator.pipe(process.stdout)

const parser = new Parser()
  .on('data', json => {
    generator.write(modify(json))
  })
  .on('finish', () => {
  }) 
  .on('error', err => {
    console.log(err)
  })

process.stdin.pipe(parser)

