import React from 'react'
import Link from 'next/link'

async function fetchRepoContents(name) {
    const response = await fetch(`https://api.github.com/repos/nkped/${name}/contents`)
    const contents = await response.json()
    
    console.log(contents)
    await new Promise((resolve) => setTimeout(resolve, 6000))
    
    return contents
}


const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div>
        <h3>Directories</h3>
        <ul>
            {dirs.map((dir) => (
                <li key={dir.path}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                </li>
            )

            )}
        </ul>
    </div>
  )
}

export default RepoDirs