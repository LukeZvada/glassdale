export const noteHTMLConverter = (noteObject) => {
    return ` 
        <section class="note">
            <divclass="note__Title>Title: ${noteObject.tite}</div> 
            <divclass="note__author>Author: ${noteObject.author}</div> 
            <divclass="note__content>Content: ${noteObject.content}</div> 
            <divclass="note__timestamp>Date: ${new Date(noteObject.timestamp).toLocaleDateString( `en-US` )}</div> 
        </section>
    `
}