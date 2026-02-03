# Mise en commun des docs de composants

## micro:bit

[Schémas de la microbit](https://tech.microbit.org/hardware/schematic/)

| GPIO on nRF52833 |      Allocation     | Interface (KL27 / nRF52) | Edge Connector name |
|:----------------:|:-------------------:|:------------------------:|:-------------------:|
| P0.00            | SPEAKER             | KL27_DAC / IF_SPEAKER    |                     |
| P1.05            | COL4                | N                        | P6                  |
| P0.02            | RING0               | N                        | P0                  |
| P0.03            | RING1               | N                        | P1                  |
| P0.04            | RING2               | N                        | P2                  |
| P0.05            | MIC_IN              | N                        |                     |
| P0.06            | UART_INT_RX*        | PTA18 / P0.03            |                     |
| P1.08            | UART_INT_TX*        | PTA19 / P0.02            |                     |
| P0.08            | I2C_INT_SCL         | PTC1 / P0.29             |                     |
| P0.10            | GPIO1               | N                        | P8                  |
| P0.09            | GPIO2               | N                        | P9                  |
| P0.11            | COL2                | N                        | P7                  |
| P1.02            | GPIO3               | N                        | P16                 |
| P0.19            | ROW5                | N                        |                     |
| P0.14            | BTN_A               | N                        | P5                  |
| P0.23            | BTN_B               | N                        | P11                 |
| P1.04            | FACE_TOUCH          | N                        |                     |
| P0.16            | I2C_INT_SDA         | PTC2 / P0.28             |                     |
| P0.17            | SCK_EXTERNAL        | N                        | P13                 |
| P0.01            | MISO_EXTERNAL       | N                        | P14                 |
| P0.13            | MOSI_EXTERNAL       | N                        | P15                 |
| P0.20            | RUN_MIC             | N                        |                     |
| P0.21            | ROW1                | N                        |                     |
| P0.22            | ROW2                | N                        |                     |
| P0.15            | ROW3                | N                        |                     |
| P0.24            | ROW4                | N                        |                     |
| P0.25            | COMBINED_SENSOR_INT | PTA1 / P0.09             |                     |
| P0.26            | I2C_EXT_SCL         | N                        | P19                 |
| P1.00            | I2C_EXT_SDA         | N                        | P20                 |
| P0.12            | GPIO4               | N                        | P12                 |
| P0.28            | COL1                | N                        | P4                  |
| P0.31            | COL3                | N                        | P3                  |
| P0.30            | COL5                | N                        | P10                 |

*: These names follow the schematic’s naming convention, labeled from the interface’s perspective, not the target MCU’s. So, UART_INT_TX corresponds to the MCU’s RX pin, and UART_INT_RX to the MCU’s TX pin.


