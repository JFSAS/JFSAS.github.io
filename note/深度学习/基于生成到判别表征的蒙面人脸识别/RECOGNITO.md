# masked_face_detection with Genenerative-to-Discriminative Representations

[论文](2405.16761v1.pdf)

## 自监督学习
自监督学习主要是利用辅助任务（pretext）从大规模的无监督数据中挖掘自身的监督信息，通过这种构造的监督信息对网络进行训练，从而可以学习到对下游任务有价值的表征。（也就是说自监督学习的监督信息不是人工标注的，而是算法在大规模无监督数据中自动构造监督信息，来进行监督学习或训练。）

监督学习利用大量的标注数据来训练模型，模型的预测和数据的真实标签产生损失后进行反向传播（计算梯度、更新参数），通过不断的学习，最终可以获得识别新样本的能力。

无监督学习不依赖任何标签值，通过对数据内在特征的挖掘，找到样本间的关系，比如聚类相关的任务。

有监督和无监督最主要的区别在于模型在训练时是否需要人工标注的标签信息。
## 表征学习
表征学习（representation learning）是学习一个特征的技术的集合：将原始数据转换成为能够被机器学习来有效开发的一种形式。它避免了手动提取特征的麻烦，允许计算机学习使用特征的同时，也学习如何提取特征：学习如何学习。
## ground truth 真实值
正确的t标注是ground truth， 错误的标记则不是。在损耗函数(loss function / error function)中会将y 和 t 作比较，从而计算损耗(loss / error)，因此如果标注数据不是ground truth，那么loss的计算将会产生误差，从而影响到模型质量。
## generative 生成式
重建缺失的脸部线索，然后对已完成的面部进行面部识别。

但是论文作者提出：

>  由于在忽视了正则化和身份保留，在图像填补时会丢失内在和外在(?)的识别关系，一些试图加强身份信息保留的方法帮助有限的

相关论文:[Two-Stream_Prototype_Learning_Network_for_Few-Shot_Face_Recognition_Under_Occlusions.pdf](Two-Stream_Prototype_Learning_Network_for_Few-Shot_Face_Recognition_Under_Occlusions.pdf)

## discriminative 判别式
通过减少遮蔽区的影响来提取鲁棒性特征。 一些论文想通过构建更加强大的神经网络来从未遮挡区域提取出更多的信息

作者提出：

> 1.直接微调现有的识别模型会增加对遮蔽脸的识别能力但会减少对未遮蔽脸的识别能力。
>
> 2.对于不同种类的遮蔽类型可能会导致鲁棒性弱的特点。即对于相同人脸不同口罩的识别缺少一致性。

相关论文：[Masked_Face_Transformer.pdf](Masked_Face_Transformer.pdf)

##  generative-to-discriminative (G2D) 生成再判别式

融合了生成式模型和判别式模型的优点。

> 首先，生成式编码器采用预训练好的人脸绘制模型的编码器，将被遮挡的人脸表示为具有丰富被遮挡人脸一般信息的类别感知描述符，以区分人脸与其他物体;然后，判别改造器结合了一个22层卷积网络，并学习将类别感知描述符转换为身份感知向量以增强识别。最后，特征分类器级联一个全连接层和一个softmax层来识别改造后的向量。该方法将生成式编码器和判别式重构器结合在一起，作为被遮挡人脸特征提取的主干，逐步进行自监督预训练，特征分类器作为识别头。最后，对骨架进行冻结，并对标记好的被遮挡面进行特征分类器的微调。

具有三个模型，分别为生产式编码器（人脸绘制模型的一部分），提取出人脸类别感知符的表征。判别改造器用卷积神经将感知符转换回身份识别向量来加强身份识别能力，最后将识别向量导入身份识别器。

## part1 Generative Encoder

Generative encoder is responsible for extracting general
face representations under mask occlusion  
drived from the ICT,which consists of a transformer netword for face representations and a CNN for upsampling faces .  

> [Wan, Z., Zhang, J., Chen, D., and Liao, J. High-fidelity pluralistic image completion with transformers. In ICCV, pp. 4692–4701, 2021.](https://openaccess.thecvf.com/content/ICCV2021/papers/Wan_High-Fidelity_Pluralistic_Image_Completion_With_Transformers_ICCV_2021_paper.pdf)

## part2 discriminative reformer 
Discriminative reformer aims to turn the encoded generative
representations into discriminative representations, so that
the identity attributes can be better recovered and described

use the recent-like netword 

# RECOGNITO

[官方指南](https://docs.recognito.vision/sdk-guide/linux-face-liveness-detection-sdk-updated-version)
## 解决问题
- 人脸识别
- 活体检测（deepfake）