export function SocialMedias({imagePath, link}){
    return(
        <a href={link} target="_blank">
            <img src={imagePath} alt="" />
        </a>
    )
}