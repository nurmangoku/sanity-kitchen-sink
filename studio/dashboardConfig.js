export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff58972bf0689ac63a6194b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kdvdzpwd',
                  apiId: '6a8d4939-6cc0-4954-a1d4-ae2b0c8f35a7'
                },
                {
                  buildHookId: '5ff58973b70adfbf3dd00278',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gexusc38',
                  apiId: 'cdec4e8a-52b8-479a-87f3-88144467c2a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nurmangoku/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gexusc38.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
