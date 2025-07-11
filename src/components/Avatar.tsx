import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    return (
        <>
            <img
                className={ (hasBorder == undefined) ? styles.avatar : ((hasBorder) ? styles.avatar : styles.avatarNoBorder)}
                {...props}
            />
        </>
    );
}