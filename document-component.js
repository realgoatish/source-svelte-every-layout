import * as fs from 'fs'

const packagedComponentsDir = fs.readdirSync('./svelte-every-layout')

packagedComponentsDir.forEach(file => {
  if (file.endsWith('.d.ts')) {
    let typeFile = fs.readFileSync(`./svelte-every-layout/${file}`, {encoding: 'utf8'})

    console.log(typeFile)

  }
})