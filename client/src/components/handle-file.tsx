import Image from 'next/image'

import { DownloadFile } from './download-file'
import { UploadFile } from './upload-file'

export function HandleFile() {
  return (
    <section className="relative my-5 grid h-[75vh] grid-rows-2 gap-4 md:h-[70vh] md:grid-cols-2 md:grid-rows-1 md:gap-10">
      <Image
        src="/spy-panda.svg"
        alt="A panda spying on you"
        width="150"
        height="150"
        className="absolute -right-3 -top-[94px] hidden md:block"
      />
      <UploadFile />
      <DownloadFile />
    </section>
  )
}
