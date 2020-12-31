import { reactive } from 'vue';

const order = () => {
    let orderState = reactive({
        direction: 'asc'
    });

    const orderItems = (items) => {
        items.sort(compareItems);
        changeOrderDirection();
    }

    const changeOrderDirection = () => {
        if(orderState.direction === 'desc') {
            orderState.direction = 'asc';
        } else if (orderState.direction === 'asc') {
            orderState.direction = 'desc';
        }
    }

    const evaluateAscOrder = (itemName, otherItemName) => {
        if(itemName < otherItemName) return 1;
        if(itemName > otherItemName) return -1;
        return 0;
    }

    const evaluateDescOrder = (itemName, otherItemName) => {
        if(itemName > otherItemName) return 1;
        if(itemName < otherItemName) return -1;
        return 0;
    }

    const compareItems = (item, otherItem) => {
        const itemName = item.name.toUpperCase();
        const otherItemName = otherItem.name.toUpperCase();

        if(orderState.direction === 'desc') {
            return evaluateDescOrder(itemName, otherItemName);
        } else {
            return evaluateAscOrder(itemName, otherItemName);
        }
    }

    return {
        orderState,
        orderItems
    }
}

export default order;