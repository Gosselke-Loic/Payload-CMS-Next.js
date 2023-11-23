import { debounce } from 'lodash';
import { endpoints } from '@/core';
import { useRouter } from 'next/router';
import { ProductModel } from '@/shared';
import type { CardsSearch } from '@/shared';
import { useSearchStore } from "@/libraries";
import { useCallback, useEffect } from 'react';

const UseSearch = (query: string): void => {
    const router = useRouter();
    const searchStore = useSearchStore();

    const research = async (): Promise<void> => {
        if(!query) return;
        const request = await fetch(`${endpoints.local.research}/${query}`);
        const data: ProductModel[] = await request.json();

        const cards: CardsSearch[] = [];
        for (let product of data) {
            cards.push({
                title: product.name,
                description: product.description,
                onTrigger: () => router.push(`/product/${product.id}`),
                id: product.id,
                image: product.slider[0].src
            })
        }
        searchStore.add(cards);
    }

    const delayedQuery = useCallback(debounce(research, 750), [query]);
    useEffect(() => {
        delayedQuery();

        return delayedQuery.cancel;
    }, [query, delayedQuery]);
};

export default UseSearch;