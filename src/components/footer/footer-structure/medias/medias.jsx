export function MediaFooter({mediaLink, image}){
    return(
        <a href={mediaLink} target="_blank">
            <img src={image} alt="" />
        </a>
    )
}