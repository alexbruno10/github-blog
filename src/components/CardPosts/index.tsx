import { Link } from "react-router-dom";
import { CardPostContainer } from "./styles";


export default function CardPosts() {
    return( 
        <CardPostContainer>
            <Link to={'/post/1'}>
            <header>
                <h2>Titulo para iniciantes</h2>
                <span>há 1 dia</span>
            </header>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean</p>
            </Link>
        </CardPostContainer>
    )
};
