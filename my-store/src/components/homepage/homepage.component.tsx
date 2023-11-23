import { GlobalHomepage } from '@/shared';
import HeaderComponent from '@/components/homepage/subcomponents/header.component';
import InlineProductsComponent from '@/components/homepage/subcomponents/inline-produtcs.component';
import BrandsComponent from '@/components/homepage/subcomponents/brands.components';
import NewArrivalsComponent from '@/components/homepage/subcomponents/newArrivals.component';
import NewsLetterComponent from '@/components/homepage/subcomponents/newsletter.component';

type Props = {
    data: GlobalHomepage
}
export default function Homepage({ data }: Props) {
    return (
        <>
            <header>
                <HeaderComponent data={data.header} />
            </header>
            <section>
                <InlineProductsComponent data={data.inlineProducts} />
                <BrandsComponent data={data.brands} />
                <NewArrivalsComponent data={data.newArrivals} />
                <NewsLetterComponent data={data.newsLetter} />
            </section>
        </>
    )
}