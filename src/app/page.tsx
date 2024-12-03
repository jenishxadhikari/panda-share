import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import MaxWidthWrapper from "@/components/max-width-wrapper"
import UploadFiles from "@/components/upload-files"
import UploadText from "@/components/upload-text"

export default function Home() {
  return (
    <MaxWidthWrapper className="px-14 py-5 md:px-24">
      <Tabs defaultValue="share-text" className="flex flex-col">
        <TabsList className="w-fit self-center px-2 py-6 md:self-start">
          <TabsTrigger value="share-text" className="text-base/7">
            Share Text
          </TabsTrigger>
          <TabsTrigger value="share-files" className="text-base/7">
            Share Files
          </TabsTrigger>
        </TabsList>
        <TabsContent value="share-text">
          <UploadText />
        </TabsContent>
        <TabsContent value="share-files">
          <UploadFiles />
        </TabsContent>
      </Tabs>
    </MaxWidthWrapper>
  )
}
