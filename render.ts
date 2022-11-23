import React, { useEffect, useRef, useState } from 'react';

const makeId = () => {
    return Math.floor((1 + Math.random()) * 0x10000000000000)
        .toString(32)
}

const itemsBank: { [key: string]: { [key: string]: () => void } } = {}

export const render = (names: string | string[]) => {
    const applyRender = (name: string) => {
        if (!itemsBank[name]) return;
        for (let item of Object.values(itemsBank[name])) {
            item();
        }
    }
    if (Array.isArray(names)) {
        for (let name of names) {
            applyRender(name)
        }
    } else {
        applyRender(names)
    }
}

export const useRender = (name?: string) => {
    const [apply, setApply] = useState(0);
    const id = useRef(makeId());

    useEffect(() => {
        if (name) {
            if (!itemsBank[name]) {
                itemsBank[name] = {}
            }
            const renderAction = () => setApply(e => e + 1)
            itemsBank[name][id.current] = renderAction;

            return () => {
                delete itemsBank[name][id.current];
                if (Object.keys(itemsBank[name]).length === 0) {
                    delete itemsBank[name];
                }
            }
        }
    }, [])

    return () => {
        setApply(e => e + 1);
    }
}
