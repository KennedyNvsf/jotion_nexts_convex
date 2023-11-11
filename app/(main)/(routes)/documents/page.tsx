'use client'

import {useMutation} from 'convex/react';
import { api } from '@/convex/_generated/api';
import {useUser} from '@clerk/clerk-react';

import {toast} from 'sonner';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Image from "next/image";

const DocumentsPage = () => {

  const {user} = useUser();
  const create = useMutation(api.document.create);

  const onCreate = () => {
    const promise = create({
      title: 'untitled',
    });

    toast.promise(promise, {
      loading: 'Creating a new note.',
      success: 'New note created!',
      error: 'Failed to create new note.', 
    })
  }
    
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image
        src='/empty.png'
        width={300}
        height={300}
        alt='empty'
        className="dark:hidden"
      />
      <Image
        src='/empty-dark.png'
        width={300}
        height={300}
        alt='empty'
        className="hidden dark:block"
      />
      <h2 className='text-lg font-medium'>
        welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className='h-4 w-4 mr-2'/>
        Create a note
      </Button>
    </div>
  )
}

export default DocumentsPage;