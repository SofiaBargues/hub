import bullEyes from '../assets/bulls-eye.webp';
import thumUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';




interface Props {
    rating:number;
}
const Emoji = ({rating}:Props) => {
  if(rating<3) return null;


const emojiMap:{[key:number]: ImageProps}={
    3:{src: meh, alt: 'meh', boxSize:'25'},
    4:{src: thumUp, alt: 'recommended', boxSize:'25'},
    5:{src: bullEyes, alt: 'excepcional', boxSize:'35'}

}
    return (
<Image {...emojiMap[rating]}  marginTop={1}/>  )
}

export default Emoji