import * as fs from 'fs'

const packagedComponentsDir = fs.readdirSync('./svelte-every-layout/components')

packagedComponentsDir.forEach(file => {
  if (file.endsWith('.d.ts')) {
    let typeFile = fs.readFileSync(`./svelte-every-layout/components/${file}`, {encoding: 'utf8'})

    console.log(typeFile)

  }
})