const state = {
    nextLink: null,
    asteroidsMap: null,
    filters: { isDanger: false },
    options: { approachDistance: 'km' },
    order: null,
    destroyed: null,
};

let notify = null;

export default (() => state)();

export const subscribe = (callback) => notify = callback;

const saveOrder = () => localStorage.setItem('order', JSON.stringify(state.order));

export const updateFilters = (filter) => {

    state.filters = { ...state.filters, ...filter };
    
    notify({...state});
};

export const updateOptions = (option) => {

    state.options = { ...state.options, ...option };

    notify({...state});
};

export const updateAsteroidsMap = (addition) => {

    state.asteroidsMap = { ...state.asteroidsMap, ...addition };

    notify({...state});
};

export const updateNextLink = (newLink) => {

    state.nextLink = newLink;

    notify({...state});
};

export const updateAsteroidData = (asteroid) => {

    state.asteroidsMap = { ...state.asteroidsMap, [asteroid.id]: asteroid };

    notify({...state});
};

export const setOrder = (order) => {
    
    state.order = order;
    state.order.forEach(id => {
        state.asteroidsMap[id]
        ? state.asteroidsMap[id].isOrdered = true
        : deleteFromOrder(id);
    });

    notify({...state});
};

export const addToOrder = (id) => {

    state.order ? state.order.push(id) : state.order = [id];
    state.asteroidsMap[id].isOrdered = true;

    saveOrder();
    notify({...state});
};

export const deleteFromOrder = (id) => {

    state.order.splice(state.order.indexOf(id), 1);

    if (!state.order.length) {
        state.order = null;
    }

    if (state.asteroidsMap[id]) {
        state.asteroidsMap[id].isOrdered = false;
    }

    saveOrder();
    notify({...state});
};

export const clearOrder = () => {

    state.order.forEach(id => state.asteroidsMap[id].isOrdered = false);
    state.order = null;

    localStorage.removeItem('order');
    notify({...state});
};