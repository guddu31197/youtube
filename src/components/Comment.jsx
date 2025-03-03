export const Comment = ({data}) => {
    const {name, text, replies} = data;
    return(
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img 
        className='w-8 h-8'
        alt='user'
        src='https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
    )
};