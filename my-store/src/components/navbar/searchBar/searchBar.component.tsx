import {
    useOpenCloseStore,
    useSearchStore 
} from '@/libraries';
import { useState } from 'react';
import UseSearch from './useSearch';
import { shallow } from 'zustand/shallow';
import { FaSearch } from "react-icons/fa";
import type { CardsSearch } from '@/shared';
import ProductCards from './productCards.component';
import NotFoundResearch from './notFound.component';
import { Modal, TextInput, Divider} from "@mantine/core";

export default function SearchBar() {
    const openCloseStore = useOpenCloseStore()
    const cards: CardsSearch[] = useSearchStore((state) => state.products, shallow)
    //Modal
    const opened = openCloseStore.modalSearchBar;
    //Input useState and Hook for debounce value
    const [value, setValue] = useState('');
    UseSearch(value);

    const Cards = () => {
        if(cards.length > 0 ) return (<ProductCards data={cards} />)
        return (<NotFoundResearch />)
    }
    const switchModal = () => {
        openCloseStore.switchSeachBar()
    }

    return (
        <>
            <Modal opened={opened} onClose={switchModal} withCloseButton={false} size="lg">
                <TextInput
                    data-autofocus
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search..."
                    variant="filled"
                    radius="md"
                    size="md"
                />
                <Divider my="sm" />
                <Cards />
            </Modal>
            <span onClick={switchModal} className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <FaSearch className="h-6 w-6" aria-hidden="true" />
            </span>
        </>
    )
}