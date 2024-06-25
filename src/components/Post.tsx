import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar.tsx';
import { Comment } from './Comment.tsx';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface PostType{
    id: number,
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState(["Post muito bacana, hein?!"])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,

    })

    function OnSubmit(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText("");

    }

    function deleteComment(commentToDelete: string) {
        const newComment = comments.filter(comment => (comment !== commentToDelete))
        setComments(newComment);
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Este campo é obrigatório.")
    }

    const isNewCommentEmpty = newCommentText.length == 0;


    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar
                            src={post.author.avatarUrl}
                        />
                        <div className={styles.authorInfo}>
                            <strong>{post.author.name}</strong>
                            <span>{post.author.role}</span>
                        </div>
                    </div>
                    <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>

                </header>
                <div className={styles.content}>
                    {
                        post.content.map(
                            line => {
                                if (line.type == 'paragraph') {
                                    return <p key={line.content}>{line.content}</p>
                                }
                                else if (line.type == 'link') {
                                    return <p key={line.content}><a href="#" >{line.content}</a></p>

                                }
                            }
                        )
                    }
                </div>

                <form onSubmit={OnSubmit} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        name="comment"
                        value={newCommentText}
                        placeholder='Deixe um comentário'
                        onChange={handleNewCommentChange}
                        required
                        onInvalid={handleNewCommentInvalid}
                    />
                    <footer>
                        <button type='submit' disabled={isNewCommentEmpty} >Comentar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    })}
                </div>
            </article>
        </>);
}