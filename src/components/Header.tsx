import Navbar from './Navbar'
import SearchBar from './SearchBar'
import logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom'
import { Select, Button, ConfigProvider, Input } from 'antd'

const Header: React.FC = () => {
  const { Option } = Select

  const Options = [
    { value: '9.5', label: 'Set 9.5' },
    { value: '10', label: 'Set 10' },
    { value: '10.5', label: 'Set 10.5' },
  ]

  const renderOption = (option: { value: string; label: string }) => {
    const { label } = option
    return <div className=''>{label}</div>
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorText: 'var(--btn-clr)',
            colorBorder: 'var(--border-clr)',
            colorBgContainer: 'var(--bg-highlight-clr)',
            colorBgElevated: 'var(--bg-clr)',
            colorTextPlaceholder: '#666',
            optionSelectedBg: 'var(--bg-highlight-clr)',
          },
        },
      }}
    >
      <div className='bg-[var(--bg-clr)] h-12'>
        <div className='max-w-[1280px] h-full mx-auto flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              to='/'
              className='flex items-center no-underline'
            >
              <img
                className='w-[68px]'
                src={logo}
                alt='logo'
              />
              <span className='text-2xl font-bold text-[var(--text-highlight-clr)] mr-8'>TFT TOP 8</span>
            </Link>
            <Select
              defaultValue='9.5'
              className='w-[100px]'
            >
              {Options.map((option, index) => (
                <Option
                  key={index}
                  value={option.value}
                >
                  {renderOption(option)}
                </Option>
              ))}
            </Select>
          </div>
          <SearchBar />
          <Button
            type='primary'
            className='bg-[#0BC4E2] text-[var(--text-clr)]'
          >
            DOWNLOAD
          </Button>
        </div>
        <Navbar />
      </div>
    </ConfigProvider>
  )
}

export default Header
