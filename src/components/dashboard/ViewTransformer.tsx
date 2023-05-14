import React, { useEffect, useState } from 'react'
import {
  Modal,
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Chart } from "primereact/chart";

type Props = {
    transformer: any
}

export default function ViewTransformer({transformer} : Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transformerActivity, setTransformerActivity] = useState({
    labels: ["10 minutes ago", "", "", "", "", "", "", "", "2 Minutes Ago", "1 Minute ago"],
    datasets: [
        {
            label: '',
            backgroundColor: '',
            data: [0],
            borderColor: '',
            tension: .4,
        },
        {
            label: '',
            backgroundColor: '',
            data: [0],
            borderColor: '',
            tension: .4,
        },
        {
            label: '',
            backgroundColor: '',
            data: [0],
            borderColor: '',
            tension: .4,
        },
    ]
  });


  useEffect(() => {
    // let transformerMeasurementsLength = 0;
    // transformerMeasurementsLength = transformer?.transformer_measurements;

    setTransformerActivity({
      labels: ["10 minutes ago", "", "", "", "", "", "", "", "2 Minutes Ago", "1 Minute ago"],
      datasets: [
        {
          label: 'AMPS',
          backgroundColor: '#00E006',
          data: [
            transformer?.transformer_measurements[9]?.current,
            transformer?.transformer_measurements[8]?.current,
            transformer?.transformer_measurements[7]?.current,
            transformer?.transformer_measurements[6]?.current,
            transformer?.transformer_measurements[5]?.current,
            transformer?.transformer_measurements[4]?.current,
            transformer?.transformer_measurements[3]?.current,
            transformer?.transformer_measurements[2]?.current,
            transformer?.transformer_measurements[1]?.current,
            transformer?.transformer_measurements[0]?.current,
          ],
          borderColor: '#00E006',
          tension: .4,
      },
      {
          label: 'VOLTS',
          backgroundColor: '#5F00A0',
          data: [
            transformer?.transformer_measurements[9]?.voltage,
            transformer?.transformer_measurements[8]?.voltage,
            transformer?.transformer_measurements[7]?.voltage,
            transformer?.transformer_measurements[6]?.voltage,
            transformer?.transformer_measurements[5]?.voltage,
            transformer?.transformer_measurements[4]?.voltage,
            transformer?.transformer_measurements[3]?.voltage,
            transformer?.transformer_measurements[2]?.voltage,
            transformer?.transformer_measurements[1]?.voltage,
            transformer?.transformer_measurements[0]?.voltage,
          ],
          borderColor: '#5F00A0',
          tension: .4,
      },
      {
          label: 'kW',
          backgroundColor: '#468200',
          data: [
            transformer?.transformer_measurements[9]?.voltage * transformer?.transformer_measurements[9]?.current,
            transformer?.transformer_measurements[8]?.voltage * transformer?.transformer_measurements[8]?.current,
            transformer?.transformer_measurements[7]?.voltage * transformer?.transformer_measurements[7]?.current,
            transformer?.transformer_measurements[6]?.voltage * transformer?.transformer_measurements[6]?.current,
            transformer?.transformer_measurements[5]?.voltage * transformer?.transformer_measurements[5]?.current,
            transformer?.transformer_measurements[4]?.voltage * transformer?.transformer_measurements[4]?.current,
            transformer?.transformer_measurements[3]?.voltage * transformer?.transformer_measurements[3]?.current,
            transformer?.transformer_measurements[2]?.voltage * transformer?.transformer_measurements[2]?.current,
            transformer?.transformer_measurements[1]?.voltage * transformer?.transformer_measurements[1]?.current,
            transformer?.transformer_measurements[0]?.voltage * transformer?.transformer_measurements[0]?.current,
          ],
          borderColor: '#468200',
          tension: .4,
      },
      ]
    })
  }, [transformer]);

  const getLightTheme = () => {
    return {
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
        }
    };

};

const basicOptions = getLightTheme();

  return (
    <>
      <button className="btn btn-secondary" onClick={onOpen}>
        View
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='h4'>Transformer Activity</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
                <div className="card px-4 py-4">
                  <br/>
                  <Chart type="line" data={transformerActivity} options={basicOptions} />
                </div>
                <br />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}