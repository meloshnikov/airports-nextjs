
interface IPros {
  tag?: keyof JSX.IntrinsicElements,
  text: string,
}

const Heading: React.FC<IPros> = ({ tag, text }) => {
  const Tag = tag || 'h1';
  return (
    <Tag>{text}</Tag>
  )
}

export default Heading;
