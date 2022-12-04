export default function Banner(props) {
    return (
        <div className='banner'>
            <img className='image-banner' src={props.banner} alt='banner' />
            {props.text && (
                <h3 className='text-banner'>Chez vous, partout et ailleurs</h3>
            )}
        </div>
    );
}
