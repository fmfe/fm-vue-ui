import navConfig from './nav.config.json';

const LANG = 'zh-CN';
const routes = [];

function loadMD (name) {
    return r => require.ensure([], () => r(require(`./examples/${name}.md`)), 'examples');
};

function loadPages (name) {
    return r => require.ensure([], () => r(require(`./pages/${name}.vue`)), 'pages');
};

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
