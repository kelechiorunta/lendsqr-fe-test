'use client'
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';

export function EmailSearch({ onSearch }) {
  return (
    <div className="flex items-center rounded-2xl bg-[#39cdcc] border-0 border-none">
      <Input
        placeholder="Search For Anything..."
        onChange={(event) => onSearch(event.target.value)}
        className="min-w-[300px] max-w-[400px] w-[400px] rounded-none outline-none focus:border-none focus:outline-none focus:outline-0"
      />
      <Button className=' bg-[#39cdcc] rounded-none rounded-tr-2xl rounded-br-2xl'><SearchIcon/></Button>
    </div>
  );
}
