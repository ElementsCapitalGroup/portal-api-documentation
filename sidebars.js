module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'index', 
        'overview/authentication', 
        'overview/api-keys'
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'reference/estimates',
        'reference/application',
        'reference/stipulation',
        'reference/funding',
        'reference/error-codes'
      ],
    },
    {
      type: 'category',
      label: 'Compliance & Security',
      collapsed: false,
      items: [
        'compliance/compliance',
        'compliance/data-security',
      ]
    }
  ]
};
