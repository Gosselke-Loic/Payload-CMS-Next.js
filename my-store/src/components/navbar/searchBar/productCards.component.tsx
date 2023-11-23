import { Image } from "@mantine/core";
import { CardsSearch } from "@/shared";
import { 
    useSearchStore,
    useOpenCloseStore
} from "@/libraries";
import { Center,
    Group,
    UnstyledButton,
    Text,
    createStyles,
    rem
} from "@mantine/core";

type Props = {
    data: CardsSearch[];
}
const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        display: 'block',
        width: '100%',
        padding: `${rem(10)} ${rem(12)}`,
        borderRadius: theme.radius.xs,
        '&:hover': {
            backgroundColor: theme.colors.gray[1],
        },
    }
}));
export default function ProductCards({ data }: Props): JSX.Element {
    const { classes } = useStyles();
    const searchStore = useSearchStore();
    const openCloseStore = useOpenCloseStore();

    return <>{data.map((item) => (
        <UnstyledButton
            key={item.id}
            className={classes.card}
            tabIndex={-1}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
                item.onTrigger();
                searchStore.addToHistory(item);
                openCloseStore.switchSeachBar();
            }}
        >
            <Group noWrap>
                {item.image && (
                    <Center>
                        <Image src={item.image} alt={item.title} width={50} height={50} />
                    </Center>
                )}
    
                <div style={{ flex: 1 }}>
                    <Text>{item.title}</Text>
        
                    {item.description && (
                        <Text color="dimmed" size="xs">
                            {item.description}
                        </Text>
                    )}
                </div>
            </Group>
        </UnstyledButton>
    ))}</>
}