import navConfig from './nav.config.json';

const LANG = 'zh-CN';
const routes = [];

function loadMD (name) {
    return resolve => import(`./examples/${name}.md`).then(component => resolve(component || component.default));
    // return r => require.ensure([], () => r(require(`./examples/${name}.md`)), 'examples');
};

function loadPages (name) {
    return resolve => import(`./pages/${name}.md`).then(component => resolve(component || component.default));
};

import ChangeLog from './pages/change-log.vue';

function regiterRoute (navConfig) {
    const navs = navConfig[LANG];

    navs.forEach(nav => {
        if (!nav.href) {
            if (nav.children) {
                nav.children.forEach(child => {
                    routes.push({
                        path: child.path,
                        name: child.name,
                        component: loadMD(child.name)
                    });
                });
            } else if (nav.path === '/changelog') {
                routes.push({
                    path: nav.path,
                    name: nav.name,
                    component: ChangeLog
                });
            } else {
                routes.push({
                    path: nav.path,
                    name: nav.name,
                    component: loadPages(nav.name)
                });
            }
        }
    });
};

regiterRoute(navConfig);

export default routes;
