import { FaStar } from "react-icons/fa";

type Props = {
    computedAverage: number;
    computedReviews: number;
}
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ReviewsProduct({ computedAverage, computedReviews }: Props) {
    return (
        <div className="mt-4 ml-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
                <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                        <FaStar
                            key={rating}
                            className={classNames(
                                computedAverage > rating ? 'text-gray-900' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                        />
                    ))}
                </div>
                <p className="sr-only">{computedAverage} out of 5 stars</p>
                <a href={""} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {computedReviews} reviews
                </a>
            </div>
        </div>
    )
}