
import Image from "next/image";

export default function DropdownItem({onClick, image, name, className}) {
    return (
        <div onClick={onClick} className={className}>
            <div style={{
                margin: 4,
                padding: 9,
                background: '#F4F4F4',
                borderRadius: 12
            }}>
                <Image style={{
                    width: 34,
                    height: 34,
                }} src={image} alt="image with product"/>
            </div>
            <div style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 14,
                color: '#171A1C',
                padding: '0 0 0 4px',
            }}>{name}</div>
        </div>
    )
}
