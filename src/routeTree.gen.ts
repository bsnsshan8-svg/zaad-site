/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CrmRouteImport } from './routes/crm'
import { Route as PsychiatristsRouteImport } from './routes/psychiatrists'
import { Route as PricingRouteImport } from './routes/pricing'
import { Route as BookRouteImport } from './routes/book'
import { Route as AboutRouteImport } from './routes/about'
import { Route as ContactRouteImport } from './routes/contact'
const IndexRoute=IndexRouteImport.update({id:'/',path:'/',getParentRoute:()=>rootRouteImport} as any)
const CrmRoute=CrmRouteImport.update({id:'/crm',path:'/crm',getParentRoute:()=>rootRouteImport} as any)
const PsychiatristsRoute=PsychiatristsRouteImport.update({id:'/psychiatrists',path:'/psychiatrists',getParentRoute:()=>rootRouteImport} as any)
const PricingRoute=PricingRouteImport.update({id:'/pricing',path:'/pricing',getParentRoute:()=>rootRouteImport} as any)
const BookRoute=BookRouteImport.update({id:'/book',path:'/book',getParentRoute:()=>rootRouteImport} as any)
const AboutRoute=AboutRouteImport.update({id:'/about',path:'/about',getParentRoute:()=>rootRouteImport} as any)
const ContactRoute=ContactRouteImport.update({id:'/contact',path:'/contact',getParentRoute:()=>rootRouteImport} as any)
export interface FileRoutesByFullPath{'/':typeof IndexRoute;'/crm':typeof CrmRoute;'/psychiatrists':typeof PsychiatristsRoute;'/pricing':typeof PricingRoute;'/book':typeof BookRoute;'/about':typeof AboutRoute;'/contact':typeof ContactRoute}
export interface FileRoutesByTo{'/':typeof IndexRoute;'/crm':typeof CrmRoute;'/psychiatrists':typeof PsychiatristsRoute;'/pricing':typeof PricingRoute;'/book':typeof BookRoute;'/about':typeof AboutRoute;'/contact':typeof ContactRoute}
export interface FileRoutesById{__root__:typeof rootRouteImport;'/':typeof IndexRoute;'/crm':typeof CrmRoute;'/psychiatrists':typeof PsychiatristsRoute;'/pricing':typeof PricingRoute;'/book':typeof BookRoute;'/about':typeof AboutRoute;'/contact':typeof ContactRoute}
export interface FileRouteTypes{fileRoutesByFullPath:FileRoutesByFullPath;fullPaths:'/'|'/crm'|'/psychiatrists'|'/pricing'|'/book'|'/about'|'/contact';fileRoutesByTo:FileRoutesByTo;to:'/'|'/crm'|'/psychiatrists'|'/pricing'|'/book'|'/about'|'/contact';id:'__root__'|'/'|'/crm'|'/psychiatrists'|'/pricing'|'/book'|'/about'|'/contact';fileRoutesById:FileRoutesById}
export interface RootRouteChildren{IndexRoute:typeof IndexRoute;CrmRoute:typeof CrmRoute;PsychiatristsRoute:typeof PsychiatristsRoute;PricingRoute:typeof PricingRoute;BookRoute:typeof BookRoute;AboutRoute:typeof AboutRoute;ContactRoute:typeof ContactRoute}
declare module '@tanstack/react-router'{interface FileRoutesByPath{'/':{id:'/';path:'/';fullPath:'/';preLoaderRoute:typeof IndexRouteImport;parentRoute:typeof rootRouteImport};'/crm':{id:'/crm';path:'/crm';fullPath:'/crm';preLoaderRoute:typeof CrmRouteImport;parentRoute:typeof rootRouteImport};'/psychiatrists':{id:'/psychiatrists';path:'/psychiatrists';fullPath:'/psychiatrists';preLoaderRoute:typeof PsychiatristsRouteImport;parentRoute:typeof rootRouteImport};'/pricing':{id:'/pricing';path:'/pricing';fullPath:'/pricing';preLoaderRoute:typeof PricingRouteImport;parentRoute:typeof rootRouteImport};'/book':{id:'/book';path:'/book';fullPath:'/book';preLoaderRoute:typeof BookRouteImport;parentRoute:typeof rootRouteImport};'/about':{id:'/about';path:'/about';fullPath:'/about';preLoaderRoute:typeof AboutRouteImport;parentRoute:typeof rootRouteImport};'/contact':{id:'/contact';path:'/contact';fullPath:'/contact';preLoaderRoute:typeof ContactRouteImport;parentRoute:typeof rootRouteImport}}}
const rootRouteChildren={IndexRoute,CrmRoute,PsychiatristsRoute,PricingRoute,BookRoute,AboutRoute,ContactRoute}
export const routeTree=rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start'{interface Register{ssr:true;router:Awaited<ReturnType<typeof getRouter>>;config:Awaited<ReturnType<typeof startInstance.getOptions>>}}
