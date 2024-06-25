import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar.tsx';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComentario() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                src="https://images.unsplash.com/profile-1611126312800-b89dfc7f41c1image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                hasBorder={false} 
                
                />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mateus Canoas</strong>
                            <time title="11 de Maio, às 08:13h" dateTime='2022-05-11 08:13:33'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComentario} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => {
                        setLikeCount((l) => { return l + 1; });
                    }}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>)
}