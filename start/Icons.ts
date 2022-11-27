import View from '@ioc:Adonis/Core/View'
import { edgeIconify } from 'edge-iconify'
import { addCollection } from 'edge-iconify'
import { icons as heroIcons } from '@iconify-json/heroicons'

View.use(edgeIconify)
addCollection(heroIcons)
