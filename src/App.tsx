import React, { useState, useMemo } from 'react';
import { Search, Plus, Trash2, SortAsc, Building, User } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
}

const generateSampleJobs = (): Job[] => {
  const jobTitles = [
    'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Engineer',
    'Data Scientist', 'Product Manager', 'UI/UX Designer', 'Software Engineer',
    'Mobile Developer', 'QA Engineer', 'System Administrator', 'Database Administrator',
    'Machine Learning Engineer', 'Cybersecurity Analyst', 'Cloud Architect', 'Scrum Master',
    'Technical Writer', 'Business Analyst', 'Project Manager', 'Sales Engineer',
    'Customer Success Manager', 'Marketing Manager', 'HR Specialist', 'Finance Analyst',
    'Operations Manager', 'Content Creator', 'Social Media Manager', 'SEO Specialist',
    'Graphic Designer', 'Video Editor', 'Account Manager', 'Consultant',
    'Research Scientist', 'Legal Counsel', 'Compliance Officer', 'Risk Analyst',
    'Solutions Architect', 'Platform Engineer', 'Site Reliability Engineer', 'Data Engineer',
    'AI Researcher', 'Blockchain Developer', 'Game Developer', 'AR/VR Developer',
    'IoT Engineer', 'Network Engineer', 'Security Engineer', 'Performance Engineer'
  ];

  const companies = [
    'Tokopedia', 'Gojek', 'Bukalapak', 'Traveloka', 'Shopee', 'Grab', 'OVO', 'Dana',
    'Blibli', 'Lazada', 'JD.ID', 'Zalora', 'Ruangguru', 'Halodoc', 'Alodokter',
    'Koinworks', 'Amartha', 'Investree', 'Modalku', 'Kredivo', 'Akulaku', 'Home Credit',
    'Flip', 'Jenius', 'Permata Bank', 'BCA', 'Mandiri', 'BRI', 'BNI', 'CIMB Niaga',
    'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Tesla', 'Spotify',
    'Uber', 'Airbnb', 'Stripe', 'Slack', 'Zoom', 'Dropbox', 'Adobe', 'Salesforce',
    'Oracle', 'IBM', 'Intel', 'Nvidia', 'Samsung', 'Sony', 'Twitter', 'LinkedIn',
    'Pinterest', 'Reddit', 'TikTok', 'Snapchat', 'Discord', 'Figma', 'Notion',
    'Canva', 'Atlassian', 'GitLab', 'GitHub', 'Docker', 'Kubernetes', 'MongoDB',
    'PostgreSQL', 'Redis', 'Elasticsearch', 'Twilio', 'SendGrid', 'Mailchimp',
    'HubSpot', 'Zendesk', 'Intercom', 'Freshworks', 'ServiceNow', 'Workday',
    'Square', 'PayPal', 'Visa', 'Mastercard', 'JP Morgan', 'Goldman Sachs',
    'Morgan Stanley', 'BlackRock', 'Vanguard', 'Fidelity', 'Charles Schwab',
    'American Express', 'Citigroup', 'Wells Fargo', 'Bank of America', 'HSBC',
    'Standard Chartered', 'Deutsche Bank', 'UBS', 'Credit Suisse', 'Barclays',
    'Royal Bank of Canada', 'TD Bank', 'Scotiabank', 'BMO', 'National Bank',
    'Deloitte', 'PwC', 'EY', 'KPMG', 'McKinsey', 'BCG', 'Bain', 'Accenture',
    'IBM Consulting', 'Capgemini', 'Infosys', 'TCS', 'Wipro', 'Cognizant',
    'HCL Technologies', 'Tech Mahindra', 'Mindtree', 'Mphasis', 'L&T Infotech',
    'Hexaware', 'Cyient', 'Persistent Systems', 'Zensar', 'NIIT Technologies',
    'Larsen & Toubro', 'Reliance', 'Tata Group', 'Aditya Birla', 'ITC',
    'Hindustan Unilever', 'Nestle', 'Procter & Gamble', 'Johnson & Johnson',
    'Pfizer', 'Novartis', 'Roche', 'Merck', 'Bristol Myers Squibb', 'AbbVie',
    'Gilead Sciences', 'Amgen', 'Biogen', 'Moderna', 'BioNTech', 'Regeneron',
    'Vertex Pharmaceuticals', 'Illumina', 'Thermo Fisher Scientific', 'Danaher',
    'Abbott', 'Medtronic', 'Boston Scientific', 'Edwards Lifesciences',
    'Intuitive Surgical', 'Stryker', 'Zimmer Biomet', 'DexCom', 'Teladoc',
    'Veracyte', 'Guardant Health', 'Foundation Medicine', 'Exact Sciences',
    'GRAIL', 'Tempus', 'Flatiron Health', 'Color Genomics', 'Helix', 'Ancestry'
  ];

  const jobs: Job[] = [];
  
  for (let i = 1; i <= 200; i++) {
    const randomTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    const randomCompany = companies[Math.floor(Math.random() * companies.length)];
    
    jobs.push({
      id: i,
      title: randomTitle,
      company: randomCompany
    });
  }
  
  return jobs;
};

function App() {
  // Utilize all this state
  const [jobs, setJobs] = useState<Job[]>(generateSampleJobs());
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'company'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const addJob = () => {
    const jobTitles = ['Senior Developer', 'Junior Developer', 'Team Lead', 'Architect', 'Consultant'];
    const companies = ['New Company', 'Startup Inc', 'Tech Corp', 'Innovation Labs', 'Digital Solutions'];
    // TODO: handle add dummy random job, pick both of job titles and companies above
  };

  const deleteJob = (id: number) => {
    // TODO: handle job deletion!
  };

  // TODO: you can utilize this function
  const filteredAndSortedJobs = useMemo(() => {
    // TODO: handle both search and sort
    return [];
  }, []);

  const toggleSort = (field: 'title' | 'company') => {
    
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
              <p className="text-gray-600 mt-1">200 positions available</p>
            </div>
            
            <button
              onClick={addJob}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <Plus size={20} />
              Add Job
            </button>
          </div>

          {/* Search and Filter Controls */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs by title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Sort Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => toggleSort('title')}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${
                  sortBy === 'title'
                    ? 'bg-blue-50 border-blue-200 text-blue-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <User size={16} />
                Title
                {sortBy === 'title' && (
                  <SortAsc 
                    size={16} 
                    className={`transform transition-transform duration-200 ${
                      sortOrder === 'desc' ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              <button
                onClick={() => toggleSort('company')}
              >
                {/* TODO: sort by company */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredAndSortedJobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search terms or add a new job.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TODO: Job List Card Items */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;