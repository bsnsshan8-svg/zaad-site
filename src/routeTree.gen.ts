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
import { Route as ResultsRouteImport } from './routes/results'
import { Route as PrivacyRouteImport } from './routes/privacy'
import { Route as TermsRouteImport } from './routes/terms'
import { Route as CookiesRouteImport } from './routes/cookies'
const IndexRoute=IndexRouteImport.update({id:'/',path:'/',getParentRoute:()=>rootRouteImport} as any)
const CrmRoute=CrmRouteImport.update({id:'/crm',path:'/crm',getParentRoute:()=>rootRouteImport} as any)
const PsychiatristsRoute=PsychiatristsRouteImport.update({id:'/psychiatrists',path:'/psychiatrists',getParentRoute:()=>rootRouteImport} as any)
const PricingRoute=PricingRouteImport.update({id:'/pricing',path:'/pricing',getParentRoute:()=>rootRouteImport} as any)
const BookRoute=BookRouteImport.update({id:'/book',path:'/book',getParentRoute:()=>rootRouteImport} as any)
const AboutRoute=AboutRouteImport.update({id:'/about',path:'/about',getParentRoute:()=>rootRouteImport} as any)
const ContactRoute=ContactRouteImport.update({id:'/contact',path:'/contact',getParentRoute:()=>rootRouteImport} as any)
const ResultsRoute=ResultsRouteImport.update({id:'/results',path:'/results',getParentRoute:()=>rootRouteImport} as any)
const PrivacyRoute=PrivacyRouteImport.update({id:'/privacy',path:'/privacy',getParentRoute:()=>rootRouteImport} as any)
const TermsRoute=TermsRouteImport.update({id:'/terms',path:'/terms',getParentRoute:()=>rootRouteImport} as any)
const CookiesRoute=CookiesRouteImport.update({id:'/cookies',path:'/cookies',getParentRoute:()=>rootRouteImport} as any)
export interface FileRoutesByFullPath{'/':typeof IndexRoute;'/crm':typeof CrmRoute;'/psychiatrists':typeof PsychiatristsRoute;'/pricing':typeof PricingRoute;'/book':typeof BookRoute;'/about':typeof AboutRoute;'/contact':typeof ContactRoute;'/results':typeof ResultsRoute;'/privacy':typeof PrivacyRoute;'/terms':typeof TermsRoute;'/cookies':typeof CookiesRoute}
export interface FileRoutesByTo{'/':typeof IndexRoute;'/crm':typeof CrmRoute;'/psychiatrists':typeof PsychiatristsRoute;'/pricing':typeof PricingRoute;'/book':typeof BookRoute;'/about':typeof AboutRoute;'/contact':typeof ContactRoute;'/results':typeof ResultsRoute;'/privacy':typeof PrivacyRoute;'/terms':typeof TermsRoute;'/cookies':typeof CookiesRoute}
export interface FileRoutesById{__root__:typeof rootRouteImport;'/':typeof IndexRoute;'/crm':typeof CrmRoute;'/psychiatrists':typeof PsychiatristsRoute;'/pricing':typeof PricingRoute;'/book':typeof BookRoute;'/about':typeof AboutRoute;'/contact':typeof ContactRoute;'/results':typeof ResultsRoute;'/privacy':typeof PrivacyRoute;'/terms':typeof TermsRoute;'/cookies':typeof CookiesRoute}
export interface FileRouteTypes{fileRoutesByFullPath:FileRoutesByFullPath;fullPaths:'/'|'/crm'|'/psychiatrists'|'/pricing'|'/book'|'/about'|'/contact'|'/results'|'/privacy'|'/terms'|'/cookies';fileRoutesByTo:FileRoutesByTo;to:'/'|'/crm'|'/psychiatrists'|'/pricing'|'/book'|'/about'|'/contact'|'/results'|'/privacy'|'/terms'|'/cookies';id:'__root__'|'/'|'/crm'|'/psychiatrists'|'/pricing'|'/book'|'/about'|'/contact'|'/results'|'/privacy'|'/terms'|'/cookies';fileRoutesById:FileRoutesById}
export interface RootRouteChildren{IndexRoute:typeof IndexRoute;CrmRoute:typeof CrmRoute;PsychiatristsRoute:typeof PsychiatristsRoute;PricingRoute:typeof PricingRoute;BookRoute:typeof BookRoute;AboutRoute:typeof AboutRoute;ContactRoute:typeof ContactRoute;ResultsRoute:typeof ResultsRoute;PrivacyRoute:typeof PrivacyRoute;TermsRoute:typeof TermsRoute;CookiesRoute:typeof CookiesRoute}
declare module '@tanstack/react-router'{interface FileRoutesByPath{'/':{id:'/';path:'/';fullPath:'/';preLoaderRoute:typeof IndexRouteImport;parentRoute:typeof rootRouteImport};'/crm':{id:'/crm';path:'/crm';fullPath:'/crm';preLoaderRoute:typeof CrmRouteImport;parentRoute:typeof rootRouteImport};'/psychiatrists':{id:'/psychiatrists';path:'/psychiatrists';fullPath:'/psychiatrists';preLoaderRoute:typeof PsychiatristsRouteImport;parentRoute:typeof rootRouteImport};'/pricing':{id:'/pricing';path:'/pricing';fullPath:'/pricing';preLoaderRoute:typeof PricingRouteImport;parentRoute:typeof rootRouteImport};'/book':{id:'/book';path:'/book';fullPath:'/book';preLoaderRoute:typeof BookRouteImport;parentRoute:typeof rootRouteImport};'/about':{id:'/about';path:'/about';fullPath:'/about';preLoaderRoute:typeof AboutRouteImport;parentRoute:typeof rootRouteImport};'/contact':{id:'/contact';path:'/contact';fullPath:'/contact';preLoaderRoute:typeof ContactRouteImport;parentRoute:typeof rootRouteImport};'/results':{id:'/results';path:'/results';fullPath:'/results';preLoaderRoute:typeof ResultsRouteImport;parentRoute:typeof rootRouteImport};'/privacy':{id:'/privacy';path:'/privacy';fullPath:'/privacy';preLoaderRoute:typeof PrivacyRouteImport;parentRoute:typeof rootRouteImport};'/terms':{id:'/terms';path:'/terms';fullPath:'/terms';preLoaderRoute:typeof TermsRouteImport;parentRoute:typeof rootRouteImport};'/cookies':{id:'/cookies';path:'/cookies';fullPath:'/cookies';preLoaderRoute:typeof CookiesRouteImport;parentRoute:typeof rootRouteImport}}}
const rootRouteChildren={IndexRoute,CrmRoute,PsychiatristsRoute,PricingRoute,BookRoute,AboutRoute,ContactRoute,ResultsRoute,PrivacyRoute,TermsRoute,CookiesRoute}
export const routeTree=rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start'{interface Register{ssr:true;router:Awaited<ReturnType<typeof getRouter>>;config:Awaited<ReturnType<typeof startInstance.getOptions>>}}
