const prefix = '_fm_';
const { localStorage: l, sessionStorage: s } = window;

export const localStorage = {
    set (key, val) {
        try {
            l.setItem(prefix + key, JSON.stringify(val));
        } catch (err) {
            alert('localStorage 写入出错');
        }
    },

    get (key) {
        try {
            const val = l.getItem(prefix + key);
            return JSON.parse(val);
        } catch (e) {
            return l.getItem(prefix + key);
        }
    },

    remove (key) {
        l.removeItem(prefix + key);
    },

    clear () {
        l.clear();
    }
};

export const sessionStorage = {
    set (key, val) {
        try {
            s.setItem(prefix + item, JSON.stringify(val));
        } catch (err) {
            alert('sessionStorage 写入出错');
        }
    },

    get (key) {
        try {
            const val = s.getItem(prefix + key);
            return JSON.parse(val);
        } catch (e) {
            return s.getItem(prefix + key);
        }
    },

    remove (key) {
        s.removeItem(prefix + key);
    },

    clear () {
        s.clear();
    }
};
