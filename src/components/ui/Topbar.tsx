import React from 'react';
import i18next from 'i18next';
import { languages } from '@/utils/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Topbar() {
  return (
    <div className="bg-red-200">Qua voglio la topbar
      <Select onValueChange={(value) => i18next.changeLanguage(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
              {languages.map((language) => (
                <SelectItem value={language} key={language}>{language}</SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Topbar