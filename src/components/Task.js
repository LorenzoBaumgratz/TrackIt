import styled from "styled-components"
import Days from "./Days"

export default function Task(){
    return(
        <Conteudo>
            Ler 1 capítulo de livro
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAABXV1fCwsLo6OgUFBSxsbF0dHSoqKiTk5P6+vouLi7Z2dlvb2/k5OSrq6vLy8vS0tLu7u6ZmZn09PSEhIRjY2OKiop7e3sODg5JSUloaGgmJiafn582NjY8PDyie8X0AAACfUlEQVRoge2ba3eDIAyGrdYrrbd6XS/7//9yh+BWK0HRgmc7y/vNGHnEUoKYOM4KJUHjH5TymyBZ09oa5TPcgZ7bIXtLYC7PBjntddB9agEdDs9UKXE+NE8uGW/4ozgqVXxwD1YaRxfQp9khnIBLYRwNg+w673O1M9AAfZ73OROa0H8WnWtMVTDhbYwgZX5pXFwwVd0UJwfdYMJTnGwuuXqiK1umEyG2i7UKeLAYjt9XH2Dk2j6Yq5bJ4T5kZKjev09EnlKBhtRXR9+du7+SU2HtzAfbkcpOUF4XMiF2P+Z1lx95Jfpsm+w4ot/VyJJxw61SXmFMJcw62fRmWvvk4S88frwuN1havr8KQoH7PE4e3HDaA33ipMdzdZmwfdGM0IT+X+iLCHuRJYnWLyh6P/0S9Oe+6M/Ra3q2L3ocNB0vFOrg0buhYUFkZN1wpHg1shM+p6FSjTb+xuYRmtCEJjSh/yO6wt9/tc3b0YGPbfw4se/HiLk++NMtqs1oWMBGkquH/zYRN58Q1y3ogNvk7dGYm+Vuw7bMpNuEJjShCU1oQhOa0IQmNKEJTWhCE5rQhCY0oQ2i4UI5QQk+RcsZU52qhS3oimfMyN/0ea46konOtzUfkw3a7duzx7bDUq9PdY0lGRRde5yY/uZ+OKEJTei30Q13yhacVguST5oFpxifr99Uh0eaV0EaR284f7eEyqSllBORY4p9UHtDkDx6W+yPSBNHM8i3CuK9RneGnOmlH2aFYtGiRqFXJDwPUZGqC6h0lRb3oQJN/jCJ6Cc/vleXjenqp/JNs8LsejCuhWqsp1rT5BVJ2IVrEuyuK2xLszPTKlGcV8/OmWpofwF/ezCuSF+9GwAAAABJRU5ErkJggg==" alt="lixo"/>
            <Days/>
        </Conteudo>
    )
}

const Conteudo=styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 340px;
    height: 91px;
    background-color: white;
    font-size: 20px;
    margin-bottom: 10px;
    position: relative;
    img{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 15px;
        height: 15px;
    }
`