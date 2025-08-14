export const getSummaryData = (formData) => [
    {
      key: 'Name',
      label: 'Name',
      value: formData.Name,
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      ),
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      key: 'Email',
      label: 'Email',
      value: formData.Email,
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      key: 'SelectedMovie',
      label: 'Selected Movie',
      value: formData.SelectedMovie,
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M6 20h12M6 4h12"></path>
        </svg>
      ),
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  ];
