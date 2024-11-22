import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { HandleFile } from './handle-file'
import { HandleText } from './handle-text'

export function HeroSection() {
  return (
    <Tabs defaultValue="share-text" className="w-[300px] md:w-full">
      <TabsList className="grid h-fit grid-cols-2 md:w-[400px]">
        <TabsTrigger value="share-text" className="font-semibold md:text-lg">
          Share Text
        </TabsTrigger>
        <TabsTrigger value="share-files" className="font-semibold md:text-lg">
          Share Files
        </TabsTrigger>
      </TabsList>
      <TabsContent value="share-text">
        <HandleText />
      </TabsContent>
      <TabsContent value="share-files">
        <HandleFile />
      </TabsContent>
    </Tabs>
  )
}
