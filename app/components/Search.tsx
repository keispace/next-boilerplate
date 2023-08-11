'use client'
import { Input } from "antd";
import Image from "next/image";



const SearchInput = () => <Input suffix={<Image src='/storage/icons/search.svg' width={15} height={15} alt={'search-icon'} />
} />

export default SearchInput