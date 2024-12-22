interface ActionButtonProps {
    name: string;
    className: string;
}

const ActionButton = ({ name, className }: ActionButtonProps) => {
    return ( 
        <button className={`${className} btn btn-sm`}>{name}</button>
     );
}
 
export default ActionButton;