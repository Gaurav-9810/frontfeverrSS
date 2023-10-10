import React, { useEffect, useState } from 'react'
import { Backend_Url } from '../../Path';
import { FcMoneyTransfer } from 'react-icons/fc'
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';
import { HStack } from '@chakra-ui/react';

const DeveloperWalletCard = ({ data }) => {

  const [companydata, setcompanydata] = useState([])



  const [show, setshow] = useState(-1);

  const handleClick = (id) => {

    setshow(id);
  }
  const hireID = data?.Hireid
  async function fetchData() {
    try {

      ;
      console.log(hireID);

      const response = await fetch(`${Backend_Url}/0auth/showCompanyProfileById/${hireID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      console.log(result[0].name);
      setcompanydata(result);



    } catch (err) {

    } finally {

    }
  }

  useEffect(() => {


    fetchData();
    // console.log(companydata[0]?.name);
  }, []);
  return (
    <div>

      <div className='lg:mr-4 lg:ml-4 mb-2  rounded-md   text-black border-2 opacity-80 '   >
        <div className='  rounded-md pb-px  ' >


          <div className='pl-2 font-semibold  text-left md:pl-4 text-White  py-2 flex justify-between  ' >
            <HStack>
            
              <HStack>
                <FcMoneyTransfer />
                </HStack>
                <HStack>

              <p className='text-sm'>{data.ProjectSummary.split(' ')
                .slice(0, 10)
                .join(' ')}{' '}</p>
                </HStack>
           
                </HStack>




            {show == '1' && <span onClick={() => handleClick('-1')} className='cursor-pointer mr-4 p-2 ' >
              <BiSolidDownArrow size={'20'} />
            </span>}
            {show == '-1' &&
              <span onClick={() => handleClick('1')} className='mr-4 z-30 p-2 cursor-pointer'>
                <BiSolidRightArrow size={'20'} />

              </span>}
          </div>


          {show == '1' && <p className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4'>

            <div className='flex justify-between'>
              <p className='cursor-pointer'>10% payment Done on </p>
              <p>{Math.floor(data?.amountinitial)}</p>
              <p>{data?.createdAt}</p>
            </div>
            <div className='flex justify-between'>
              <p className='cursor-pointer'>90% payment Done on </p>
              {data?.amountfinal && <p>{Math.floor(data?.amountfinal)}</p>}

              <p>{data?.updatedAt}</p>
            </div>
            <div className='flex justify-between'>
              <p>from {companydata[0]?.name}</p>
            </div>
          </p>
          }

        </div>
      </div>
    </div>
  )
}

export default DeveloperWalletCard