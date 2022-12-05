export default function Tags({ currentRental }) {
    const tags = currentRental.tags;

    const tagElements = tags.map((tag, index) => (
        <span className='tag-infos' key={index}>
            {tag}
        </span>
    ));

    return <>{tagElements}</>;
}
